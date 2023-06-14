module.exports = {
    beforeCreate(event) {
    if (event.params.data.company && event.params.data.year && event.params.data.role) {
      const { company = "", year = "", role = "" } = event.params.data;
      event.params.data.title = `${year}-${company}-${role}`;
    }
  },

  beforeUpdate(event) {
    if (event.params.data.company && event.params.data.year && event.params.data.role) {
        const { company = "", year = "", role = "" } = event.params.data;
        event.params.data.title = `${year}-${company}-${role}`;
      }
  },
};