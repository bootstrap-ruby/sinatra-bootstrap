require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'sqlite3'


configure :development do
	DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/projects.db")
end

class Project

	include DataMapper::Resource
	
	property :id, 			Serial
	property :name,			String
	property :description,  String
	property :filename,		String
	property :created_at,   DateTime
	property :updated_at, 	DateTime
	
	def handle_upload( file )
		path = File.join(Dir.pwd, "/public/projects", file[:filename])
		File.open(path, "wb") do |f|
			f.write(file[:tempfile].read)
		end
	end
end

DataMapper.auto_upgrade!

before do 
	@bodyclass = 'class="default"'
end

get '/' do
	@projects = Project.all
  erb :home
end

get '/contact' do
	@bodyclass = 'class="bts"'
	erb :contact
end

get '/design-services' do
	@projects = Project.all(:order => [:created_at.desc])
	@bodyclass = 'class="services"'
	erb :work
end

get '/list' do
	@page_title = "List Projects"
	@projects = Project.all(:order => [:created_at.desc])
	erb :list
end

get '/new' do
	@page_title = "New Project"
	erb :new
end

post '/create' do
	@project = Project.new(params[:project])
	@project.handle_upload(params[:image])
	@project.filename = params[:image][:filename]
	if @project.save
		redirect "/show/#{@project.id}"
	else
		redirect('/list')
	end
end

get '/show/:id' do
	@project = Project.get(params[:id])
	if @project
		erb :show, :layout => false
	else
		redirect('/list')
	end
end

delete '/:id' do
	@p = Project.get(params[:id])
	@p.destroy
	redirect '/list'
end