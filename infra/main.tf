resource "random_string" "suffix" {
  length  = 6
  upper   = false
  special = false
}

resource "aws_s3_bucket" "tf_bucket" {
  bucket = "${var.project_name}-tfstate-${random_string.suffix.result}"

  tags = {
    Project     = "${var.project_name}"
    Environment = "${var.environment}"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "tf_bucket_encryption" {
  bucket = aws_s3_bucket.tf_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "tf_bucket_versioning" {
  bucket = aws_s3_bucket.tf_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}