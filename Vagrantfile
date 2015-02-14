# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.ssh.forward_agent = true
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.include_offline = true
  
  config.vm.define "books-info-website", primary: true do |angular|
    angular.vm.network "private_network", ip: "192.168.33.10"
    
    angular.vm.provision "shell", inline: <<PROVISIONSCRIPT
      curl -sL https://deb.nodesource.com/setup | sudo bash -
      add-apt-repository ppa:git-core/ppa
      apt-get update
      apt-get install -y nodejs build-essential git
      npm install -g bower
      npm install -g grunt-cli
PROVISIONSCRIPT

    angular.vm.hostname = 'book-info-website.herokuapp.com'

    angular.vm.synced_folder ".", "/vagrant"
  end
end
