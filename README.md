# stress-test
Stress testing using NodeJS

1)  Is the website fast enough for the user?  (200ms if possible)

2)  Can the website keep up with normal use?

3)  What will need to scale first on the system?

4)  Can the website deal with overage intelligently?

5)  Can we deal with what we can reasonably expect?

6)  (Client) Functional tests passed?

7)  (Server) Load tests passed?

8)  Does the website work properly?

9)  How much CPU time and memory does a normal request use?

siege -t1M -c100 -d10s example.com

HTTP/1.1 200   0.04 secs:    1270 bytes ==> GET  /

Lifting the server siege...      done.

Transactions:		        1126 hits
Availability:		      100.00 %
Elapsed time:		       59.54 secs
Data transferred:	        1.36 MB
Response time:		        0.05 secs
Transaction rate:	       18.91 trans/sec
Throughput:		        0.02 MB/sec
Concurrency:		        1.02
Successful transactions:        1126
Failed transactions:	           0
Longest transaction:	        0.41
Shortest transaction:	        0.03
