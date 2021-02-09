if [ $# -eq 0 ]
then
  echo "Usage: 'sh replace-next-version-tag.sh [version]"
  exit
fi

mv changelog/next_release.md changelog/$1.md

find src/ -type f | xargs sed -i "s/\`next.release\`/"$1"/"