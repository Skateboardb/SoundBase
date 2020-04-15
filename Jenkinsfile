node{
    checkout scm
    docker.withRegistry("637157488766.dkr.ecr.us-west-2.amazonaws.com", "ecr-credentials"){
        def customImage = docker.build("soundbase")

        customImage.push()
    }
}