FROM ubuntu:focal

WORKDIR /data

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        sqlite3 \
        && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["sqlite3", "/data/database.db"]
