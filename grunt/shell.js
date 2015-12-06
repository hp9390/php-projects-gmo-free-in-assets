module.exports = function (grunt, options) {
    return {
        dockerstart: {
            command: 'docker-compose -f ../php-projects-gmo-free-in/docker-data/docker-compose.yml up -d',
            options: {
                stderr: true
            }
        },
        dockerstop: {
            command: 'docker-compose -f ../php-projects-gmo-free-in/docker-data/docker-compose.yml stop',
            options: {
                stderr: true
            }
        },
        dockerremove: {
            command: 'docker-compose -f ../php-projects-gmo-free-in/docker-data/docker-compose.yml rm -f',
            options: {
                stderr: true
            }
        },
        dockerps: {
            command: 'docker-compose -f ../php-projects-gmo-free-in/docker-data/docker-compose.yml ps',
            options: {
                stderr: true
            }
        },
        gulpprefixgh: {
            command: 'gulp prefixgh',
            options: {
                stderr: true
            }
        }
    };
};