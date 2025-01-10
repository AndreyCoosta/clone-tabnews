function status(request, response) {
  response.status(200).json({ bee: "boo" });
}

export default status;
