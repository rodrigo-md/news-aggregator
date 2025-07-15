terraform {
  backend "s3" {
    bucket         = "news-aggregator-tfstate-uwjad5"
    key            = "dev/terraform.tfstate"
    region         = "us-west-2"
    use_lockfile = true
  }
}