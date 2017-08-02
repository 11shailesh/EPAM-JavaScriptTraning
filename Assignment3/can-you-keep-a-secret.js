function createSecretHolder(secret) {
    return secretObj = {
        getSecret: function () {
            return secret;
        },
        setSecret: function (num) {
            secret = num;
        }
    };
}
