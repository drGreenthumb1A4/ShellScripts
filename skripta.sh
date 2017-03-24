CORE=$(sensors | grep "Core 0")
TEMP=$(echo $CORE | cut -d '+' -f 2 | cut -d '°' -f 1)
echo $TEMP
