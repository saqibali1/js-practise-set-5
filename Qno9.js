

function startValue=$2
stopValue=$1


if [ $# -ne 2  ]
then
   echo "Error - You must enter two numbers exactly - using default start value of 1"
#exit 0
fi

echo ${startvalue:=1}

while (test "$startvalue" -le "$stopvalue" ||  "$startvalue" -ge "$stopvalue")
do
       startvalue=$((startvalue+1))
        console.log( $startvalue)
done