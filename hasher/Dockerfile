FROM ruby:alpine
RUN apk update
RUN apk add --update build-base curl
RUN gem install sinatra
RUN gem install thin
RUN bundle add rackup
ADD hasher.rb /
CMD ["ruby", "hasher.rb"]
EXPOSE 80
