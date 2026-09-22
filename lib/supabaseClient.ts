import { createClient } from "@supabase/supabase-js";

export interface RsvpEntry {
  id?: string;
  guest_name: string;
  attendance: "hadir" | "tidak";
  guest_count: number;
  message: string;
  created_at?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize client if credentials are present
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Mock initial data for local preview / fallback when Supabase is not connected yet
const initialMockWishes: RsvpEntry[] = [
  {
    id: "mock-1",
    guest_name: "Budi Santoso & Keluarga",
    attendance: "hadir",
    guest_count: 2,
    message:
      "Selamat ya Rifa & Rizky! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin yaa robbal aalamiin ✨",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "mock-2",
    guest_name: "Siti Rahma",
    attendance: "hadir",
    guest_count: 1,
    message:
      "Happy wedding Rifa & Rizky! Lancar-lancar sampai hari H yaa. Doa terbaik untuk kalian berdua 💖",
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: "mock-3",
    guest_name: "Dimas & Annisa",
    attendance: "hadir",
    guest_count: 2,
    message:
      "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khair. Selamat menempuh hidup baru!",
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
];

export async function fetchRsvpList(): Promise<RsvpEntry[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("rsvp_guestbook")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Supabase fetch error, using local fallback:", error);
        return getLocalWishes();
      }
      return data && data.length > 0 ? data : getLocalWishes();
    } catch (e) {
      console.warn("Supabase exception, using local fallback:", e);
      return getLocalWishes();
    }
  }

  return getLocalWishes();
}

export async function submitRsvp(
  entry: Omit<RsvpEntry, "id" | "created_at">
): Promise<{ success: boolean; data?: RsvpEntry; error?: string }> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("rsvp_guestbook")
        .insert([
          {
            guest_name: entry.guest_name,
            attendance: entry.attendance,
            guest_count: entry.guest_count,
            message: entry.message,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase insert error:", error);
        // Fallback save to local storage
        const saved = saveLocalWish(entry);
        return { success: true, data: saved };
      }

      return { success: true, data };
    } catch (err: any) {
      console.error("Supabase insert exception:", err);
      const saved = saveLocalWish(entry);
      return { success: true, data: saved };
    }
  }

  // Demo fallback mode
  const saved = saveLocalWish(entry);
  return { success: true, data: saved };
}

function getLocalWishes(): RsvpEntry[] {
  if (typeof window === "undefined") return initialMockWishes;
  try {
    const stored = localStorage.getItem("wedding_rsvp_wishes");
    if (stored) {
      const parsed = JSON.parse(stored);
      return [...parsed, ...initialMockWishes];
    }
  } catch (e) {
    // ignore
  }
  return initialMockWishes;
}

function saveLocalWish(entry: Omit<RsvpEntry, "id" | "created_at">): RsvpEntry {
  const newWish: RsvpEntry = {
    ...entry,
    id: "local-" + Date.now(),
    created_at: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("wedding_rsvp_wishes");
      const list: RsvpEntry[] = stored ? JSON.parse(stored) : [];
      list.unshift(newWish);
      localStorage.setItem("wedding_rsvp_wishes", JSON.stringify(list));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }

  return newWish;
}
