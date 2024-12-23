module.exports = {
  config: {
    api_key: import.meta.env.REACT_APP_MAILGUN_API_KEY,
    domain: "shroomspy.com",
    from: "No Reply <no-reply@shroomspy.com>",
    templates: {
      invite_email: "invite",
    },
  },
};
