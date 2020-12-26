interface Item {
  data: any
  name: string
}

export const Storage = {
  /**
   * Set items to localStorage
   */
  setItems: async (items: Item[]) =>
    items.map(item => localStorage.setItem(`@gobarber:${item.name}`, JSON.stringify(item.data))),

  /**
   * Get item from localStorage
   */
  getItem: (item: string) => JSON.parse(localStorage.getItem(`@gobarber:${item}`) as string),

  /**
   * Remove item from localstorage
   */
  remove: (item: string) => localStorage.removeItem(item),

  /**
   * Remove user info
   */
  clearUser: () => {
    localStorage.removeItem(`@gobarber:user`)
    localStorage.removeItem(`@gobarber:token`)
  },
}
