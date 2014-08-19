require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame eg. "kippt/jekyll-incorporated"
GITHUB_REPONAME = "fyquah95.github.io"
GITHUB_USERNAME = "fyquah95"

namespace :post do
  desc "Generate new post layout"
  task :new , [:name] do |t ,arg|
    class String
      def titleize
        self.split(/ |\_/).map(&:capitalize).join(" ")
      end
    end
    title = arg["name"]
    file_name = "#{Time.now.strftime('%Y-%m-%d')}-#{arg["name"]}.md"
    puts "post name to be generated in ./_posts is #{file_name}"
    base_format = File.open("./_drafts/draft.md" , "r"){ |f| f.read }
    base_format.sub!("<title-goes-here>" , title.gsub(/[-_]/ , " ").titleize)
    f = File.new("./_posts/#{file_name}" , "w")
    f.write(base_format)
    f.close
  end
end

namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin https://github.com/#{GITHUB_USERNAME}/#{GITHUB_REPONAME}"
      system "git push origin master"
    end
  end
end
