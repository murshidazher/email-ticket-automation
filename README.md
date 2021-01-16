# [email-ticket-automation](https://github.com/murshidazher/email-ticket-automation)

> This is the repo for email trigger and automatic ticket creation :fire:

- Runs in the background to scan the defined mail inbox(es)
- Either create or update tickets based on the content of the incoming emails to the forwarded mailbox.

## Table of Contents

- [email-ticket-automation](#email-ticket-automation)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [How to](#how-to)
  - [Tools](#tools)
  - [License](#license)

## Setup

- Create a `IFTTT` service with email trigger
- Connect it to a webhook trigger with a `POST` request with a `json` body

```json
{
  "title": "<<< {{Subject}}>>>",
  "content": "<<< {{Body}}>>>"
}
```

## How to

- Send an email to `trigger@applet.ifttt.com` from the connected email and then make a web request to the endpoint and see if the record was added.

## Tools

- [IFTTT]()
- [mongodb]()
- [express]()

## License

[MIT](https://github.com/murshidazher/email-ticket-automation/blob/master/LICENSE) © Murshid Azher.
