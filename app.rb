require 'rubygems'
require 'sinatra'



before do 
	@bodyclass = 'class="default"'
end

get '/' do

  erb :home
end

get '/team' do
	@bodyclass = 'class="bts"'

	erb :team
end

get '/services' do

	erb :services
end

get '/portfolio' do
	erb :work
end