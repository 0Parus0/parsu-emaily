 localtunnel () {
  lt -p 5000 -s sheyaletqkei -h \"http://serverless.social\"
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done