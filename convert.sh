# first mac execute brew install pandoc !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
#!/bin/bash

OUTPUT="output.md"

# delete the output file if it already exists
if [ -f $OUTPUT ]
then
  rm $OUTPUT
fi

# iterate over all md files in the specified directory and its subdirectories
for file in `find docs/zh -name "*.md"`
do
  # delete all image links in the md file
  sed -i '/!\[\](.*)/d' $file

  cat $file >> $OUTPUT
  echo -e '\n' >> $OUTPUT
done

# convert the output md file to docx file using pandoc
pandoc $OUTPUT -o output.docx

rm -rf output.md