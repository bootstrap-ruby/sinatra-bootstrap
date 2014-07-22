require 'rubygems'
require 'sinatra'



before do 
	@bodyclass = 'class="default"'
end

get '/' do

  erb :home
end

get '/contact' do

	erb :svg
end

get '/design-services' do

	erb :work
end