# bailysSrvLanding
The landing page for bailys server.

This is what is hosted on Baily's Camera Server within the office. It can be accessed by typing zoneminder.home.

In order to push updates, make changes to this repository, log into the camera server, find the folder on the
desktop, pull new changes, then move all files over to /var/www/html using the copy command on the server.

```
sudo cp -r folderName /var/www/html
sudo cp index.html /var/www/html
```

It may seem annoying but it was a super quick way of having a documentation page up and running in a few hours.
