import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type Feature = {
  icon: string;
  title: React.ReactNode;
  description: React.ReactNode;
  to?: string;
};

const FEATURES: Feature[] = [
  {
    icon: '🧠',
    title: <Translate id="feat.mm.title">Memory Management</Translate>,
    description: (
      <Translate id="feat.mm.desc">
        Bitmap-based physical memory manager (PMM) and a virtual memory manager (VMM) with
        full paging.
      </Translate>
    ),
    to: '/docs/architecture/memory-layout',
  },
  {
    icon: '📁',
    title: <Translate id="feat.vfs.title">Virtual File System</Translate>,
    description: (
      <Translate id="feat.vfs.desc">
        A VFS layer over ramfs, ext2 (persistent on ATA disk), and procfs for kernel
        introspection.
      </Translate>
    ),
    to: '/docs/architecture/overview',
  },
  {
    icon: '🧩',
    title: <Translate id="feat.sys.title">Linux-style Syscalls</Translate>,
    description: (
      <Translate id="feat.sys.desc">
        A syscall interface compatible with the Linux x86_64 ABI — read, write, fork,
        execve, and more.
      </Translate>
    ),
    to: '/docs/syscalls/abi',
  },
  {
    icon: '📦',
    title: <Translate id="feat.elf.title">ELF64 Loader</Translate>,
    description: (
      <Translate id="feat.elf.desc">
        Loads and executes userspace ELF64 binaries in Ring 3, with its own minimal C
        library.
      </Translate>
    ),
    to: '/docs/architecture/overview',
  },
  {
    icon: '🔁',
    title: <Translate id="feat.sched.title">Process Scheduler</Translate>,
    description: (
      <Translate id="feat.sched.desc">
        A round-robin scheduler with fork, wait, pipes, and signal primitives for real
        multitasking.
      </Translate>
    ),
    to: '/docs/architecture/overview',
  },
  {
    icon: '🚀',
    title: <Translate id="feat.boot.title">Multiboot2 Boot</Translate>,
    description: (
      <Translate id="feat.boot.desc">
        Boots via GRUB 2 on both UEFI and BIOS, transitioning from 32-bit to 64-bit long
        mode.
      </Translate>
    ),
    to: '/docs/architecture/boot-flow',
  },
];

export default function Features(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <Translate id="features.heading">Everything, from scratch</Translate>
        </h2>
        <p className={styles.sub}>
          <Translate id="features.sub">
            Sinux is an independent kernel — not Linux. Every subsystem is built by hand to
            understand how operating systems really work.
          </Translate>
        </p>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => {
            const card = (
              <div className={styles.card} key={i}>
                <div className={styles.cardIcon}>{f.icon}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </div>
            );
            return f.to ? (
              <Link key={i} to={f.to} className={styles.cardLink}>
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
}
