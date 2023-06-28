1. ### Cloud Storage Calculator ### - [LINK](https://vintwp.github.io/portfolio-calculate-prices/)

2. Storage cloud calculator is the same as https://wasabi.com/cloud-storage-pricing/#cost-estimates

3. Storage and transfer between 0 and 1000 (with 1GB step)
4. Column (or row) with lower price is provider's color. Another is gray


3. Conditions for task
  backblaze.com
  - minimal Payment 7$
  - price Storage $0.005
  - price Transfer $0.01

    bunny.net
  - SSD, HDD switcher
  - max Payment 10$
  - price Storage ($0.01 HDD, $0.02 SSD)
  - price Transfer $0.01 (any)

    bunny.net
  - Single, Multi switcher
  - max Payment 10$
  - price Storage (
      Multi - 75Gb free, next is $0.06
      Single - 75Gb free, next is $0.03
  )
  - price Transfer 75Gb free, next $0.02 (any)


  Test cases for calculator:
  a) Storage 50 GB, Transfer 50 GB:
  backblaze.com = 7$.
  bunny.net HDD = 1$, SSD = 1.5$.
  scaleway.com Multi = 0$, Single = 0$.
  vultr.com = 5$.

  b) Storage 100 GB, Transfer 200 GB:
  backblaze.com = 7$.
  bunny.net HDD = 3$, SSD = 4$.
  scaleway.com Multi = 4$, scaleway.com Single = 3.25$.
  vultr.com = 5$.

  c) Storage 300 GB, Transfer 300 GB:
  backblaze.com = 7$.
  bunny.net HDD = 6$, SSD = 9$.
  scaleway.com Multi = 18$, Single = 11.25$.
  vultr.com = 6$.

  d) Storage 1000 GB, Transfer 1000 GB:
  backblaze.com = 15$.
  bunny.net HDD = 10$, bunny.net SSD = 10$.
  scaleway.com Multi = 74$, Single = 46.25$.
  vultr.com = 20$.

