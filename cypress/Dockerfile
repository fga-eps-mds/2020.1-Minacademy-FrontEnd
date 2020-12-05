FROM cypress/included:6.0.0

WORKDIR /e2e

RUN npm install -D @cypress/code-coverage

CMD ["--browser chrome", "--config video=false"]