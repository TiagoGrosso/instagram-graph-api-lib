if [ $# -eq 0 ]
then
  echo "Usage: 'sh replace-next-version-tag.sh [version]"
  exit
fi

mv changelog/next_release.md changelog/$1.md

find src/ -type f | xargs sed -i "s/\`next.release\`/"$1"/g"
find changelog/ -type f | xargs sed -i "s/\`next.release\`/"$1"/g"
echo "-   [$1](./$1.md)" >> changelog/changelog.md

echo "# \`next.release\`" > changelog/next_release.md