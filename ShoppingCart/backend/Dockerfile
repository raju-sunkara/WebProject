FROM python:latest

USER root

COPY . /usr/share

WORKDIR /usr/share
RUN \
    apt-get update

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python", "backend.py"]