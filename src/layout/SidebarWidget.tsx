import * as React from 'react'

export default function SidebarWidget(): React.ReactElement {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Zack Zheng
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Try to be a better Web Developer.Using React, Tailwind CSS and shadcn to build this app.
      </p>
      <a
        href="https://github.com/zack-xy"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Visit me
      </a>
    </div>
  )
}
