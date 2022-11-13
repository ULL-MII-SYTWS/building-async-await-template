#!/bin/bash
CMDA=$(node solution.js)
CMDB=$(node async-await-example.js)

echo $CMDA
echo $CMDB

if [[ "$CMDA" == "$CMDB" ]];then
  echo "OK";
else
  echo "not OK";
fi