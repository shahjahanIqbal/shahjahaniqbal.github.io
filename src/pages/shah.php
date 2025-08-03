#!/bin/bash

# HEASoft and IXPE prerequisite installer

echo "Installing required system packages..."

sudo apt-get update

# Development libraries
sudo apt-get -y install libreadline-dev
sudo apt-get -y install libncurses5-dev     # or "libncurses-dev"
sudo apt-get -y install ncurses-dev
sudo apt-get -y install curl
sudo apt-get -y install libcurl4
sudo apt-get -y install libcurl4-gnutls-dev
sudo apt-get -y install xorg-dev
sudo apt-get -y install make
sudo apt-get -y install gcc g++ gfortran

# Perl dependencies
sudo apt-get -y install perl-modules
sudo apt-get -y install libdevel-checklib-perl
sudo apt-get -y install libfile-which-perl

# Python development and scientific stack
sudo apt-get -y install python3-dev         # or "python-dev"
sudo apt-get -y install python3-pip
sudo apt-get -y install python3-setuptools
sudo apt-get -y install python3-astropy     # needed for IXPE
sudo apt-get -y install python3-numpy       # needed for IXPE
sudo apt-get -y install python3-scipy       # needed for IXPE
sudo apt-get -y install python3-matplotlib  # needed for IXPE

# Upgrade pip (optional on Ubuntu 24.04)
echo "Upgrading pip..."
sudo pip install --upgrade pip
sudo /usr/bin/python3 -m pip install --upgrade pip

echo "All packages installed successfully."
<?php echo "hi"; ?>
