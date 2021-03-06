echo "Pulling changes ..."
#git pull
echo "Downloading new js file ..."
curl -G http://connect.facebook.net/fr_FR/all.js -o ../connect/all.js
echo "Beautifying ..."
python/js-beautify -jo ../connect/all-beautified.js ../connect/all.js
mv ../connect/all-beautified.js ../connect/all.js
IFS=,
var1="`head -1 ../connect/all.js`"
var2="`echo $var1 | awk -F" " '{print $5}'`"
unset IFS
echo "Viewing diff ..."
git difftool -y -t opendiff ../connect/all.js
echo "Git Log :"
git log --oneline -n 5
date
echo "Ready to commit ..."
read -p "Do you want to commit Yes / No ?" ans
if [ "$ans" == "y" ] || [ "$ans" == "Y" ] || [ "$ans" == "Yes" ]
then
		git commit -e -m "$var2" ../connect/all.js
		
		read -p "Do you want to push Yes / No ?" ans
		if [ "$ans" == "y" ] || [ "$ans" == "Y" ] || [ "$ans" == "Yes" ]
		then
			git push
		else
			echo "Local version updated & commited ..."
		fi
		
else
		read -p "Do you want to revert Yes / No ?" ans
		if [ "$ans" == "y" ] || [ "$ans" == "Y" ] || [ "$ans" == "Yes" ]
		then
			echo "Reverting local version ..."
			git checkout ../connect/all.js
		else
			echo "Local version updated ..."
		fi
fi