#!/bin/bash

PROJDIR="/home/wwwroot/eumlab"
PIDFILE="$PROJDIR/eumlab.pid"
SOCKET="$PROJDIR/eumlab.sock"

OUTLOGFILE="$PROJDIR/access.log"
ERRLOGFILE="$PROJDIR/error.log"

cd $PROJDIR
if [ -f $PIDFILE ]; then
    kill `cat -- $PIDFILE`
    rm -f -- $PIDFILE
fi

exec /usr/bin/env - \
    PYTHONPATH="../python:.." \
    ./manage.py runfcgi socket=$SOCKET pidfile=$PIDFILE outlog=$OUTLOGFILE errlog=$ERRLOGFILE umask=0000


