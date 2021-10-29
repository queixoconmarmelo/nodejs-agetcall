### Provide these variable here or on command line to override the default
### terraform apply \
#      -var access_key=... \
#      -var secret_key=.... \
#       ....
###############################################################
  

variable "access_key" {
  default = "AK*********7RMMRF"
}
variable "secret_key" {
  default = "y**************mk6YQv7RpcxugiHrDH7ez"
}

variable "region" { 
  default = "us-east-2"
}

variable "ami" {
  default = "ami-0b500ef59d8335eee"
}
variable "instance_type" {
  default = "t2.micro"
}

variable "ssh_rsa_pub" {
  default = "~/.ssh/id_rsa.pub"
}

