#!/bin/bash
#
# A small script used to bring in data changes from another branch (live-xeditable) 
# into the master branch. Workflow of Support Handbook changes is:
#   - Make live changes via https://tharris14.lab.novell.com/handbook (live-xeditable)
#   - Publish to master via this script (only data/handbook.json updated)
#   - Create Enhancement Bug with MF Dev and assign to Jon Henage
#   - Send email to Ken Davis / Jon Henage updating them about the pending change to go live
#

dataFile="data/handbook.json"
wrkBranch="live-xeditable"

# Data change on live-xeditable
read -p "Commit $wrkBranch:$dataFile? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    git checkout $wrkBranch && git add $dataFile && git commit -m 'Technical Support Handbook updates for $(date +%m-%d-%Y)'
fi

# Push to live branch
read -p "Update on master and push? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    git checkout master && git pull && git checkout $wrkBranch -- $dataFile && git commit -m 'Technical Support Handbook updates for $(date +%m-%d-%Y)' && git push
fi

echo -e "File bug with IS&T Web Services:

\tClassification:\tMarketing Services
\tProduct:\tMicrofocus.com Development
\tComponent:\tSupport
\tVersion:\tGlobal

\ti.e. https://bugzilla.novell.com/show_bug.cgi?id=998229

# Comment example:
There has been some changes in the handbook data.

This change has been reflected in the master branch:
https://github.com/tdharris/handbook/commit/$(git log -1 --format="%H")

$(git show --summary)"
