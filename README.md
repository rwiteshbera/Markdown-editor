# Getting Started with Markdown Editor
Markdown Editor is a free and open-source editor that helps you to write your own readme file for the Github repository.

## How to contribute?
**1.** Fork this repository.

 **2.** Clone the repository to get the repository in your local environment.
 ```
 git clone https://github.com/rwiteshbera/Markdown-editor.git
 ```
**3.** Go to the repository folder:

```
cd Markdown-editor
```
**4.** Add a reference (remote) to the original repository:
> Setting a remote upstream and fetching it time to time makes sure your forked repo is in sync with the original repo. To set upstream (only use once).
```
git remote add upstream https://github.com/rwiteshbera/Markdown-editor.git
```

**5.** Take a pull from the upstream main to make your repo upto date:
>To fetch (Everytime you want to fetch run this):
```
git pull upstream main
```
**6.** Make new branch(change branch name as you want):
> In branch your changes should not affect production code. It's used to make production code bug free. And you should make branches when to do any changes in any code. 
```
git checkout -b <branch_name>
```
**7.** Now if you want to make any changes to code for making codes more efficient do it (make sure to raise an issue)
 >do comment beside your code why you add this changes

**8.** Install dependencies:
```
npm install
```
**9.** Run the app:
```
npm start
```
**10.** Now add your changes:

```
git add .
```

**11.** Commit changes:
>This 'commit' command save your  changes to local repository.

```
git commit -m "<relevant message to your change>"
```
**12.** Push changes(change branch_name to that which you made during creating branch):
>The 'push' command  syncs your commits.
```
git push -u origin <branch_name>
```
**13.** To make pull request:

>Now click on `compare and pull requests`

### 🖼️ Built with : ReactJS

