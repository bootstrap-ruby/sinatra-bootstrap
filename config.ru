require 'rubygems'
require 'bundler'
require './app'

Bundler.require

run Sinatra::Application
