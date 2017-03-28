#!/usr/bin/env bash

deployModeInput=$1

deployMode="dev"
bucketName="jancvb.com"
deployedUrl="http://jancvb.com.s3-website-us-east-1.amazonaws.com"
if [ "$deployModeInput" = "prod" ]; then
    # TODO: configure production UI deployment
    deployMode="dev"
    bucketName="jancvb.com"
    deployedUrl="http://jancvb.com.s3-website-us-east-1.amazonaws.com"
fi

echo
echo "Shipping site to bucket: $bucketName..."
echo

echo "Creating distribution..."
npm run build
aws s3 sync dist s3://$bucketName/ --exclude ".DS_Store"

echo
echo "===================================="
echo "Site deployed to $deployedUrl"
echo "===================================="
echo
