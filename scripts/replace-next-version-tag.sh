if [ $# -eq 0 ]
then
  echo "Usage: 'sh replace-next-version-tag.sh [version]"
  exit
fi

find src/ -type f | xargs sed -i "s/\`next.release\`/"$1"/"