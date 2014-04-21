require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'sqlite3'


configure :development do
	DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/projects.db")
	
	DataMapper.auto_upgrade!
end

get '/' do
  erb :home
end

get '/community' do
	erb "hey"
end

get '/contact' do

end

get '/services' do
	erb "test"
end

