<script lang="ts">
  import * as Entries from './lib/entries';
  import * as Topics from './lib/topics';

  const entries = Entries.all();
  let topics = Topics.all();
  let filter = '';

  function filterTopic(topic: string) {
    console.debug(`Filtering: ${topic}`);
    if (filter == topic) {
      filter = '';
    } else {
      filter = topic;
    }
  }
</script>

<main>
  <h1>RPGGen</h1>
  <p>This is a web directory linking to content generators for tabletop role-playing games. Some of these have RandRoll interviews. Sites with more than one generator list some examples of the generators they provide.</p>

  <p><strong>Last Updated:</strong> 2024-01-14</p>

  <p>You can filter by topic. Click a topic to filter by it. Click it again to remove the filter.</p>

  <p>Current filter: {#if filter != ''}"{filter}"{:else}none{/if}</p>

  <section class="topics">
    {#each topics as topic}
    <div>
      <a id="topic-{topic.id}" class="{ topic.name == filter ? 'active': ''}" on:click|preventDefault={() => filterTopic(topic.name)}>{topic.name}</a>
    </div>
    {/each}
  </section>

  {#each entries as entry}
    {#if filter != '' && entry.topics.includes(filter) || filter == ''}
    <section class="entry">
      <h2>{entry.name}</h2>
      <p><strong>Website:</strong> <a href="{entry.website.url}">{entry.website.name}</a></p>
      {#if entry.interview != null }
      <p><strong>Interview:</strong> <a href="{entry.interview.url}">{entry.interview.name}</a></p>
      {/if }
      {#if entry.examples.length > 0 }
      <h3>Examples</h3>
      <ul>
        {#each entry.examples as example }
        <li><a href="{example.url}">{example.name}</a></li>
        {/each}
      </ul>
      {/if}
      <div class="topics">
        {#each entry.topics as topic}
        <div>{topic}</div>
        {/each}
      </div>
    </section>
    {/if}
  {/each}
</main>

<footer>
  <p>This site is maintained by <a href="https://benovermyer.com">Ben Overmyer</a>. The source code is available on <a href="https://github.com/BenOvermyer/rpggen.dev">GitHub</a>.</p>
</footer>
