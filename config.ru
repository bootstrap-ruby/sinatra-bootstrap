require 'rubygems'
require 'bundler'
require 'sinatra'
require 'rack'
require './app'

set :root, Pathname(__FILE__).dirname
set :environment, :production
set :run, false

run Sinatra::Application
