**Myflix LoginPage**:
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/815cc4b1-2216-4a38-986c-39445d397d0c)
After SignIn >> HomePage
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/bdd81b50-b619-4af0-8d9a-ee39773b51c2)
SignUp Page:
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/f997b748-41b2-4a88-893a-f1d4f6e441f4)

Create Instance and create elestic IP, Add ports 8080(jenkins), 8081(app port) and 9000(sonarqube) by editing inbound rules
Connect the instance and clone myflix repo 
**Install docker**
sudo apt-get update
sudo apt-get install docker.io -y
sudo usermod -aG docker $USER  # Replace with your system's username, e.g., 'ubuntu'
newgrp docker
sudo chmod 777 /var/run/docker.sock

build docker with : docker build --build-arg TMDB_V3_API_KEY=c560998e5f8524298c2c0a492f2f0e97 -t netflix .
docker images
docker run -d -p 8081:80 netflix
docker ps
copy IP and add IP:8081 and run 
**Myflix**
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/05c13817-9107-49f4-bb20-8da4a494d8f9)
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/0a425509-cbb2-4ced-902b-89ce33adf96f)
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/628e86da-e6ab-4a19-b1ab-d2fa054d130d)
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/02480ccf-5126-4d66-8bab-0e9246c4833f)



**Sonarqube**:
docker run -d --name sonar -p 9000:9000 sonarqube:lts-community
open IP:9000 in the browser
bydefault userid and password will be admin

Meanwhile download **trivy**
sudo apt-get install wget apt-transport-https gnupg lsb-release
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
echo deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy 
trivy image <imageID of your myflix>
trivy will give you report of file system.

**Install Jenkins**
sudo apt update
sudo apt install fontconfig openjdk-17-jre
java -version
openjdk version "17.0.8" 2023-07-18
OpenJDK Runtime Environment (build 17.0.8+7-Debian-1deb12u1)
OpenJDK 64-Bit Server VM (build 17.0.8+7-Debian-1deb12u1, mixed mode, sharing)

#jenkins
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins   
To extract your password sudo cat /var/lib/jenkins/secrets/initialAdminPassword and username will be admin only

**Install Necessary Plugins in Jenkins:**

Goto Manage Jenkins →Plugins → Available Plugins →

Install below plugins

1 Eclipse Temurin Installer (Install without restart)

2 SonarQube Scanner (Install without restart)

3 NodeJs Plugin (Install Without restart)

4 Email Extension Plugin

Configure Java and Nodejs in Global Tool Configuration
Goto Manage Jenkins → Tools → Install JDK(17) and NodeJs(16)→ Click on Apply and Save

SonarQube
Create the token

Goto Jenkins Dashboard → Manage Jenkins → Credentials → Add Secret Text. It should look like this

After adding sonar token

Click on Apply and Save

**Create a CI/CD pipeline**
pipeline {
    agent any
    tools {
        jdk 'jdk17'
        nodejs 'node16'
    }
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }
    stages {
        stage('clean workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout from Git') {
            steps {
                git branch: 'main', url: 'https://github.com/N4si/DevSecOps-Project.git'
            }
        }
        stage("Sonarqube Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Netflix \
                    -Dsonar.projectKey=Netflix'''
                }
            }
        }
        stage("quality gate") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }
    }
}
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/f40fc945-50f7-4de4-94ce-5b3e5defc71c)

Add Project On **Sonarqube** and set up , once you will build pipeline report will be generated on sonarqube
![image](https://github.com/SmitaPable/myflixFrondend/assets/146085760/20504654-36ea-4e93-ae83-91d55b1177c1)

You can add trivy on docker and build docker on pipeline take reference of https://www.youtube.com/watch?v=g8X5AoqCJHc to continue.






