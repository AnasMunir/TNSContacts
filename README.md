# TNSContacts
Test app for ToldMedia
The repository has two branches master & bonusfeatures
## The master branch has the following features
```
- User can create contacts
- Contacts are saved in the local storage
- Contacts are arranged in ascending order accoring to their First Name
```

## The bonusfeatures branch has the following features
```
- User can create contacts
- Contacts can be manually synced to firebase by the user
- Contacts are not saved in the local storage, to show the workings of firebase
- User can change the ascending order of the contacts from Firs Name to Last Name and vice versa
```

## Run the sample application (TNSContacts)
Note: When switching between branches, remove and then add both platforms
Install NPM packages:
```
$ cd TNSContacts
$ npm install
$ tns install
```

## Run on android
Note: Connect your android device to your laptop
```
$ tns platform add android
$ tns run android
```


## Run on iOS
Note: If problem occurs, try removing and adding ios platform.
```
$ tns platform add ios
$ tns run ios --emulator
```
