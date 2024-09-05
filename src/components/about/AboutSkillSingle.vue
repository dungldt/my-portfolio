<script>
export default {
  props: ["skill"],
};
</script>

<template>
    <li
      className="rounded-xl px-3 py-2
               bg-black/60 dark:bg-white/10 text-white dark:text-white/80 font-bold"
      key="{skill.id}"
    >
      {{skill.name}}
    </li>
</template>

<style lang="scss" scoped></style>
