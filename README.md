# rpggen.dev

This is a directory website for generators for tabletop role-playing games.

## Contributing

Add sites and topics to data.json. Each site should go in the "entries" block. If
you add a topic to an entry, make sure to also add it to the "topics" block, as that
is used for indexing and styling.

Once you've made your changes, run `python3 generate.py` to produce the final files.
