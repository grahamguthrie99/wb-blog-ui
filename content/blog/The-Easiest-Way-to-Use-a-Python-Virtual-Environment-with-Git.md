---
path: virtual-env
date: 2019-07-30T17:54:51.941Z
author: Graham Guthrie
title: The Easiest Way to Use a Python Virtual Environment with Git
description: "Explaining the easiest way to set up and manage a python virtual environment
  with Git."
---

In this story, I will explain why a virtual environment is necessary when developing in python. I will then explain how to set up and properly use a virtual environment with source control.

#### What is a Virtual Environment?

Setting up a virtual environment when building a python project is an essential step in the development process. A virtual environment allows dependencies to be separated between projects. A dependency is just some sort of module that is required for your project to run properly. As the dependency modules are updated, conflicts can arise between projects if dependencies are shared and the necessary versions are not the same. A virtual environment eliminates these conflicts by allowing the dependencies to be project specific and isolated from the system.

![Virtual Env](/../assets/1*RPKFQIl3cxXFvZEXb8cGSA.png "Virtual Env")

#### How to Do It

The process of setting up a virtual environment should be done for every project and is quite painless.

**First, create a project directory and switch into it.**
```python
mkdir test-env && cd test-env
```

Venv is included with Python versions 3.3 and newer and is the default way of setting up virtual environments.

**Next, run the script below within the directory to create the virtual environment:**
```python
python3 -m venv env
```

\*note it is a common naming convention to name the environment env but this can be anything

**In order to start the virtual environment run the script below:**
```python
source env/bin/activate
```

Now if you look at the project directory you will see a subdirectory env, which you just created.

Congrats! You now are working in a virtual environment and can install dependencies correctly. When you need to stop just run `deactivate`.

#### **For Git users, in order to track project dependencies, continue below:**

1.  While in the virtual environment, start by installing a package. For this example we will use pandas. Run `pip install pandas`
2.  Run `deactivate` to stop the virtual environment
3.  Initialize the repo by running `git init`
4.  Run `echo ‘env' > .gitignore` to include the env folder in the .gitignore file so the virtual environment is ignored in source control
5.  Run `pip freeze > requirements.txt` to place the dependencies in a text file to be committed. Freezing reads all the installed dependencies and then produces a text file with the name of the dependency and the installed version number.
6.  Run `git add requirements.txt` to check the file into source control.
7.  Commit the files and push to a repo.

Congrats yet again! You have now properly set up your virtual environment with Git.
