# Circleci-heroku-node-CI-CD

# This is a simple Node express appdeployed to Heroku with CI/CD and also connected to Circle for CI/CD pipeline.

# Procedure: Heroku/Github
# I cloned my repo on my local
# I created a simple BNode express app using "npx express generator"
# Then "git add .", "git commit -m "initial commit" and "git push" to push the app code to Github.
# Created an new app name on Heroku using thesame name of the Github repo
# Heroku, choose Github as build type. Serach for the repo by typing the name and connect the repo on Heroku
# For my Node express app, I enabled Node build park on Heroku
# Select enable automatic deployment and then click on deploy branch. 
# This deploys the app on Heroku, and then click on view app to see your app displayed.
# Go back to Github and make changes to the app code and this will reflect the change on Heroku if everything goes as planned.

# Procedure: Circleci/Github
# Add a folder named .circleci and add a file called config.yml to your repo 
# write a config.yml script for your app, eg node app and make a commit
# Head over to Circleci click on add project and the list of your Github repo will be listed.
# Choose the repo you will like to build in pipeline and select it.
# A build will be triggered immediately
# A green build will appear if everything works out fine.
# In same manner, if you make any change to the Config.yml script it will automatically trigger another build

