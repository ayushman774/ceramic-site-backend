const productList = [
  {
    image:
      "https://media-hosting.imagekit.io//ad4950ebca1741ef/ceramic-cup-01-300x300.jpg?Expires=1837495813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SCgQtnNLPvrpdz7onDFErC8vJPBFnZJbik0SX6WnHPNNCJ2~ikW-SGEo1a5Pe5zn5g2D5ZBQr-K7QnVIVeVLCzPZy6G2aKr1ZukeOJ1va7uL2NKZtBqWhY-dlkEXMbpiJ1T9Oco~Zu5kHIJ4dvsIbGsdFKM4vzfmXLlO4sS6PxNYj3s8ftQf~8gD5rdfHY1Fj1YKEx5OxtdmLWhPKd9muKgKIFTAIlnIfaigpeihSf8~6jtN8Zjf9m3aYLxqKFtKS78Y-RzrTABdBqiGncwBlnh1YVdOpEqSq7jqu~vSq3cOSppBWZDGiSJY4iMJxx16AvI1c26xanC2ntj9ytsrfg__",
    category: "Ceramic",
    name: "Ceramic Cup",
    total_amount: "$237.00",
    discount_amount: "$200.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//aa69d671b9584988/ceramic-planter-01-300x300.jpg?Expires=1837495813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y7FHCIzSEhC4lNsUhUusXLPE7WRR06SVoI17TiZTaPhUOLJW750QcEbrbyWG--Wp2aup7pbqs3cnMiF4HpPBQqosGTmwMH8C-e3FMJJCvHTLmQJaRlPlK0eshk3P8x4osZCL-cV0WLgYFV1-R6T6x54H9By3b8reZoSS8MZUKt4KiQmdesNi9RZQo655eNInZhMmnUnZ-9CRT~spJN2aldhFIieDveo84MNivoWnSwquCK8MzSdyclOuVolOJet-uX2tCs3hO9d5Lnuc~mxPMMsg07dJdaCoWAPX5c4wl0~-pqrjQTkmnG0ZRR4iIB-Hi2nocmtngrPgjBfETPvkpg__",
    category: "Ceramic",
    name: "Ceramic Planter",
    total_amount: "$349.00",
    discount_amount: "$299.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//56676166392840ca/product-01-300x300.jpg?Expires=1837495814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LAq1t4FmUBpDQfL1wLNI3j6Q~BLHwwmCILPmRKovRRlFvE3nDhWjCW8Q6imFUNyDUprVaeFfCopmpqi1hyaUi~NyfSgT~xMJnPGU16OdiNKZzc-YgGwf~EBgXF23~YzBEf2wql3ecgwqTntQ3rBbHNepggN1-wJBIE6GjZOOhglow8Y93jBaB1RLOWmnVu2acKVdodtFPCR-mLC6or-jYrv9kbaJ76QiwNNwQrOm1ErW~NY6fWpuo4RT7fY65idG6SIaRAiIQPXjMQb5soX6unJiBhg4I2-tsqmFdcZqJ4jcCn~kZsI5hhQZ1gbzIUZxZqU4coP9aS852J9SoOPsnA__",
    category: "Ceramic",
    name: "Ceramic Plates",
    total_amount: "$179.00",
    discount_amount: "$119.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//5a10d001858f4cb0/product-02-300x300.jpg?Expires=1837495814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qu8MVmgM8D9z6dd8hZLIwymB1EA4sKpHL7j9NjtKQNWTSb5lSaDeDVI3zR6gaEwutNNyiLMz7aKzxP01id62rItGZICMcBk4XpBgHmiHDePa6wPBEa-A0OQvZ5WvfUKtH~d3z-uWO69uBe61hXBZ3JPq8AkxX~YXlYCbwqiJ~etXM1R7IYV3cOv4j1YuQbwwuba5bm2l3C2i5Jl54RG8~kGISpHQ89E72elujEjhnsaAy5vt3m5QDvKKr8PS~BYnGnwIJymTWEr5Hjx0fgB8qWNNf5QfQJKDvStLJMZLhgu~0M6svBXmntZg8Fb2jH2RNpQS1I3hkztrd0xEp2jhmw__",
    category: "Ceramic",
    name: "Ceramic Bowls",
    total_amount: "$249.00",
    discount_amount: "$209.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//b249354e07b54633/product-07-300x300.jpg?Expires=1837495814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C5Q20XHSlHdHXVYaDOzZkvGjh8QTxgcSyAz61WIze-jPGgxR3zG~fndrvkC9LeA42sVAp16jMv20iHOdkt8Wxv6-yFkeDt-wuZsAUYgaEHvel8XUOVNTZEXb-ICRPGATZErpQghWzyfuLM4Z719inCIYgjA4kgQ4yvoL9KeArfhxlJQML-fzK9KOnb84cSR-XY8CUdmRRqdjJXjAQ6Ao~t2u0CVnB0GHAmploEUqE3blbP91OWUMp6BV10p~wIejUdeeVxe4krKBwCqz5l0Qi~h8r4JXwllBWMhDWlxS4pOvAZGkiejl~CBSdP7lHbgsdodoaQ4jzI3DoaHwgdUrhw__",
    category: "Ceramic",
    name: "Ceramic Spoons",
    total_amount: "$349.00",
    discount_amount: "$299.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//ef06978bd4c04e7c/contact-01-300x300.jpg?Expires=1837495813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NvQEnJneDlefI5m522rHKumFImUw8pfYkH0e5EerXWOGTEdMJB64dDDqkPTTb2qLOEdMFZbu5HsmnT8XiyoYzKt7G3yr0jUj~13uEkfiQuPdwIg9VslIDGJztogB6wjBPE~J0LR0QPnIcWNYi5AMwfUh2Si6qkKVDNb0h2V8MNbO9ZqAMd1hWIturrpLlnNUWrmmILBPAL5tK9tjB2MM1hh6csrx541S3JJaBIK~1Fa3opQTTfg0kZ5j0~8ew~QWwpqVmkdyWwMvhOiwYR6Ho~vZXkvUymd9bLIesA6hmUWfJ7HL~r6g11ZkAelNjblaG01~U92zGM~0qa5IH0eNwQ__",
    category: "Pottery",
    name: "Ceramic Vases",
    total_amount: "$247.00",
    discount_amount: "$217.00",
    section: "popular",
  },
  {
    image:
      "https://media-hosting.imagekit.io//7071bf4adf584393/product-09-300x300.jpg?Expires=1837495814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NHhNbKHU6naOni1Y3Kjjb5smm4DYaVj8f16qAzNwMTG2P8rtN~NNI00YfSM5PpKXkKAMy1LercWuajRIJlZb2T8ch3BwP~jgXeIuxqlNsVPYguivJ9w8oLhYmJ1Sl9aKsvqn6HUKUn~1eAyjQAnz19F12VEkFkKycxSQA8-CqI~EvekvoAGlfgUV8sqakGeQZbVF5NG3i6SP~~th-1rVXgCrckRuCEFG53cABVoblPtjaQtDnc4isqR7fAMq0R46QC7UQwnxXMXoXl4b38J7nI9XLVlI-nseSeNX01HpC~qxtDDnLxlrERpBtdG6V3AXh9lfOLt7rnMTcY6i~S6iTA__",
    category: "Ceramic",
    name: "Ceramic Cup",
    total_amount: "$237.00",
    discount_amount: "$189.00",
    section: "trending",
  },
  {
    image:
      "https://media-hosting.imagekit.io//ad4950ebca1741ef/ceramic-cup-01-300x300.jpg?Expires=1837495813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SCgQtnNLPvrpdz7onDFErC8vJPBFnZJbik0SX6WnHPNNCJ2~ikW-SGEo1a5Pe5zn5g2D5ZBQr-K7QnVIVeVLCzPZy6G2aKr1ZukeOJ1va7uL2NKZtBqWhY-dlkEXMbpiJ1T9Oco~Zu5kHIJ4dvsIbGsdFKM4vzfmXLlO4sS6PxNYj3s8ftQf~8gD5rdfHY1Fj1YKEx5OxtdmLWhPKd9muKgKIFTAIlnIfaigpeihSf8~6jtN8Zjf9m3aYLxqKFtKS78Y-RzrTABdBqiGncwBlnh1YVdOpEqSq7jqu~vSq3cOSppBWZDGiSJY4iMJxx16AvI1c26xanC2ntj9ytsrfg__",
    category: "Ceramic",
    name: "Ceramic Planter",
    total_amount: "$349.00",
    discount_amount: "$299.00",
    section: "trending",
  },
  {
    image:
      "https://media-hosting.imagekit.io//96f4ea957ad64833/product-03-300x300.jpg?Expires=1837495814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZkY45MDx8Eys8SoaLWTHSwoPojDBritWfXXhJsQAwHLxVe5hisV5Nl8fBtts1zII2z~0TkXC4pzOfM0GIaefWB4OkHZx-tkYpmDTWcrDAaGEg0iKQoxkgYqhrbIHKCuwcR0CC9vtq6~D~M2XmLTqI049NiXsEw63ASygZ6JOMh9LxAwPrB-Jme~BKQ6tVPFYAegE~LgnAFTmbfy97Eam1AV5-Bc~C6FYJWhIVDKfo1JZeD2lsHSfiHZoJdl1cfLxJtkO4VafGZQM2hzNuV0xh2Zadp0dqlqgvjauNSISpCgqasxcpKA2jWa~hHB23qzQO6yFFRfwaETIERCbSqHjNQ__",
    category: "Ceramic",
    name: "Ceramic Plates",
    total_amount: "$179.00",
    discount_amount: "$119.00",
    section: "trending",
  },
];

module.exports = productList;
