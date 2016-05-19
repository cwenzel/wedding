
echo "DROP DATABASE wedding" | mysql -uroot
echo "CREATE DATABASE wedding" | mysql -uroot
echo "CREATE TABLE rsvp (name VARCHAR(40), party_size VARCHAR(10), email VARCHAR(40), phone VARCHAR(40))" | mysql -uroot wedding
