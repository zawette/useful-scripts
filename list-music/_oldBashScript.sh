for i in ../*.mp3
do
    # metadata=$(ffprobe "${i}" 2>&1)
    title=$(ffprobe "${i}" 2>&1 | grep -e "\<title\>\|\<artist\>" | cut -d: -f2 | tr -d '\n')
    echo "${title}" >> "MusicList.txt"
done
#`mv music.txt MusicList/music.txt`