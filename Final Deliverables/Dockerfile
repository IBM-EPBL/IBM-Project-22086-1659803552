FROM python:3.10.2
LABEL maintainer ="NMPro"
RUN apt-get update
RUN mkdir /app

workdir /usr/src/app
COPY . /app

copy requirements.txt ./
run pip install -r requirements.txt
copy . .
EXPOSE 5000
  ENTRYPOINT [ "python" ]

CMD ["app.py"]