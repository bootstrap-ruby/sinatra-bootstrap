require 'rubygems'
require 'sinatra'



before do 
	@bodyclass = 'class="default"'
end

get '/' do

  erb :home
end

get '/team' do

	erb :team
end

get '/design-services' do

	erb :services
end

get '/portfolio' do
	erb :work
end